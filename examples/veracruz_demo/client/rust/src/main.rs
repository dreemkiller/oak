//
// Copyright 2020 The Project Oak Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

//! Veracruz Demo client that sends simple requests to the server and prints
//! the responses that it receives back.

#![feature(async_closure)]

use anyhow::Context;
use veracruz_demo_grpc::proto::{veracruz_demo_client::VeracruzDemoClient, RandomRequest};
use log::info;
use oak_abi::label::Label;
use oak_client::{create_tls_channel, interceptors::label::LabelInterceptor};
use structopt::StructOpt;
use tonic::Request;
#[derive(StructOpt, Clone)]
#[structopt(about = "Veracruz Demo Client")]
pub struct Opt {
    #[structopt(
        long,
        help = "URI of the Oak application to connect to",
        default_value = "https://localhost:8080"
    )]
    uri: String,
    #[structopt(
        long,
        help = "PEM encoded X.509 TLS root certificate file used by gRPC client"
    )]
    root_tls_certificate: String,
}

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    env_logger::init();
    info!("Initialising and reading args");
    let opt = Opt::from_args();

    let uri = opt.uri.parse().context("Error parsing URI")?;
    let root_tls_certificate =
        std::fs::read(&opt.root_tls_certificate).context("Could not load certificate file")?;

    info!("Connecting to Oak Application: {:?}", uri);
    let channel = create_tls_channel(&uri, &root_tls_certificate)
        .await
        .context("Couldn't create TLS channel")?;
    let label = Label::public_untrusted();
    let interceptor =
        LabelInterceptor::create(&label).context("Couldn't create gRPC interceptor")?;
    let client = VeracruzDemoClient::with_interceptor(channel, interceptor);

    info!("Sending requests");
    let gen_request: Request<RandomRequest> = Request::new(RandomRequest {
        number_of_bytes: 16
    });
    let result = client.clone().generate_random(gen_request).await;
    match result {
        Ok(res) => {
            info!("Received response: {:?}", res.get_ref().data)
        },
        Err(err) => panic!("Error sending request {:?}", err),
    }

    let forward_request: Request<RandomRequest> = Request::new(RandomRequest {
        number_of_bytes: 16
    });
    let result = client.clone().forward_random(forward_request).await;
    match result {
        Ok(res) => {
            info!("Received response: {:?}", res.get_ref().status)
        },
        Err(err) => panic!("Error sending request {:?}", err),
    }
    Ok(())
}