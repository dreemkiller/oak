(function() {var implementors = {};
implementors["oak"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak/struct.Handle.html\" title=\"struct oak::Handle\">Handle</a>","synthetic":true,"types":["oak::Handle"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak/struct.ReadHandle.html\" title=\"struct oak::ReadHandle\">ReadHandle</a>","synthetic":true,"types":["oak::ReadHandle"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak/struct.WriteHandle.html\" title=\"struct oak::WriteHandle\">WriteHandle</a>","synthetic":true,"types":["oak::WriteHandle"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"oak/enum.OakError.html\" title=\"enum oak::OakError\">OakError</a>","synthetic":true,"types":["oak::error::OakError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak/grpc/struct.Invocation.html\" title=\"struct oak::grpc::Invocation\">Invocation</a>","synthetic":true,"types":["oak::grpc::invocation::Invocation"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak/grpc/struct.ChannelResponseWriter.html\" title=\"struct oak::grpc::ChannelResponseWriter\">ChannelResponseWriter</a>","synthetic":true,"types":["oak::grpc::ChannelResponseWriter"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"oak/grpc/enum.WriteMode.html\" title=\"enum oak::grpc::WriteMode\">WriteMode</a>","synthetic":true,"types":["oak::grpc::WriteMode"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak/grpc/client/struct.Client.html\" title=\"struct oak::grpc::client::Client\">Client</a>","synthetic":true,"types":["oak::grpc::client::Client"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak/io/struct.Receiver.html\" title=\"struct oak::io::Receiver\">Receiver</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["oak::io::receiver::Receiver"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak/io/struct.Sender.html\" title=\"struct oak::io::Sender\">Sender</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["oak::io::sender::Sender"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak/io/struct.Message.html\" title=\"struct oak::io::Message\">Message</a>","synthetic":true,"types":["oak::io::Message"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak/rand/struct.OakRng.html\" title=\"struct oak::rand::OakRng\">OakRng</a>","synthetic":true,"types":["oak::rand::OakRng"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak/roughtime/struct.Roughtime.html\" title=\"struct oak::roughtime::Roughtime\">Roughtime</a>","synthetic":true,"types":["oak::roughtime::Roughtime"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak/storage/struct.Storage.html\" title=\"struct oak::storage::Storage\">Storage</a>","synthetic":true,"types":["oak::storage::Storage"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak/proto/oak/storage/struct.StorageItem.html\" title=\"struct oak::proto::oak::storage::StorageItem\">StorageItem</a>","synthetic":true,"types":["oak::proto::oak::storage::StorageItem"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak/proto/oak/storage/struct.StorageChannelReadRequest.html\" title=\"struct oak::proto::oak::storage::StorageChannelReadRequest\">StorageChannelReadRequest</a>","synthetic":true,"types":["oak::proto::oak::storage::StorageChannelReadRequest"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak/proto/oak/storage/struct.StorageChannelReadResponse.html\" title=\"struct oak::proto::oak::storage::StorageChannelReadResponse\">StorageChannelReadResponse</a>","synthetic":true,"types":["oak::proto::oak::storage::StorageChannelReadResponse"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak/proto/oak/storage/struct.StorageChannelWriteRequest.html\" title=\"struct oak::proto::oak::storage::StorageChannelWriteRequest\">StorageChannelWriteRequest</a>","synthetic":true,"types":["oak::proto::oak::storage::StorageChannelWriteRequest"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak/proto/oak/storage/struct.StorageChannelWriteResponse.html\" title=\"struct oak::proto::oak::storage::StorageChannelWriteResponse\">StorageChannelWriteResponse</a>","synthetic":true,"types":["oak::proto::oak::storage::StorageChannelWriteResponse"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak/proto/oak/storage/struct.StorageChannelDeleteRequest.html\" title=\"struct oak::proto::oak::storage::StorageChannelDeleteRequest\">StorageChannelDeleteRequest</a>","synthetic":true,"types":["oak::proto::oak::storage::StorageChannelDeleteRequest"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak/proto/oak/storage/struct.StorageChannelDeleteResponse.html\" title=\"struct oak::proto::oak::storage::StorageChannelDeleteResponse\">StorageChannelDeleteResponse</a>","synthetic":true,"types":["oak::proto::oak::storage::StorageChannelDeleteResponse"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak/proto/oak/storage/struct.StorageChannelBeginRequest.html\" title=\"struct oak::proto::oak::storage::StorageChannelBeginRequest\">StorageChannelBeginRequest</a>","synthetic":true,"types":["oak::proto::oak::storage::StorageChannelBeginRequest"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak/proto/oak/storage/struct.StorageChannelBeginResponse.html\" title=\"struct oak::proto::oak::storage::StorageChannelBeginResponse\">StorageChannelBeginResponse</a>","synthetic":true,"types":["oak::proto::oak::storage::StorageChannelBeginResponse"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak/proto/oak/storage/struct.StorageChannelCommitRequest.html\" title=\"struct oak::proto::oak::storage::StorageChannelCommitRequest\">StorageChannelCommitRequest</a>","synthetic":true,"types":["oak::proto::oak::storage::StorageChannelCommitRequest"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak/proto/oak/storage/struct.StorageChannelCommitResponse.html\" title=\"struct oak::proto::oak::storage::StorageChannelCommitResponse\">StorageChannelCommitResponse</a>","synthetic":true,"types":["oak::proto::oak::storage::StorageChannelCommitResponse"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak/proto/oak/storage/struct.StorageChannelRollbackRequest.html\" title=\"struct oak::proto::oak::storage::StorageChannelRollbackRequest\">StorageChannelRollbackRequest</a>","synthetic":true,"types":["oak::proto::oak::storage::StorageChannelRollbackRequest"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak/proto/oak/storage/struct.StorageChannelRollbackResponse.html\" title=\"struct oak::proto::oak::storage::StorageChannelRollbackResponse\">StorageChannelRollbackResponse</a>","synthetic":true,"types":["oak::proto::oak::storage::StorageChannelRollbackResponse"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak/proto/oak/storage/struct.StorageServiceDispatcher.html\" title=\"struct oak::proto::oak::storage::StorageServiceDispatcher\">StorageServiceDispatcher</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["oak::proto::oak::storage::StorageServiceDispatcher"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak/proto/oak/storage/struct.StorageServiceClient.html\" title=\"struct oak::proto::oak::storage::StorageServiceClient\">StorageServiceClient</a>","synthetic":true,"types":["oak::proto::oak::storage::StorageServiceClient"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak/proto/oak/roughtime/struct.RoughTimeRequest.html\" title=\"struct oak::proto::oak::roughtime::RoughTimeRequest\">RoughTimeRequest</a>","synthetic":true,"types":["oak::proto::oak::roughtime::RoughTimeRequest"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak/proto/oak/roughtime/struct.RoughTimeResponse.html\" title=\"struct oak::proto::oak::roughtime::RoughTimeResponse\">RoughTimeResponse</a>","synthetic":true,"types":["oak::proto::oak::roughtime::RoughTimeResponse"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak/proto/oak/roughtime/struct.RoughtimeServiceDispatcher.html\" title=\"struct oak::proto::oak::roughtime::RoughtimeServiceDispatcher\">RoughtimeServiceDispatcher</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["oak::proto::oak::roughtime::RoughtimeServiceDispatcher"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak/proto/oak/roughtime/struct.RoughtimeServiceClient.html\" title=\"struct oak::proto::oak::roughtime::RoughtimeServiceClient\">RoughtimeServiceClient</a>","synthetic":true,"types":["oak::proto::oak::roughtime::RoughtimeServiceClient"]}];
implementors["oak_loader"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak_loader/struct.Opt.html\" title=\"struct oak_loader::Opt\">Opt</a>","synthetic":true,"types":["oak_loader::Opt"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak_loader/struct.ConfigEntry.html\" title=\"struct oak_loader::ConfigEntry\">ConfigEntry</a>","synthetic":true,"types":["oak_loader::ConfigEntry"]}];
implementors["oak_runtime"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak_runtime/struct.RuntimeConfiguration.html\" title=\"struct oak_runtime::RuntimeConfiguration\">RuntimeConfiguration</a>","synthetic":true,"types":["oak_runtime::RuntimeConfiguration"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak_runtime/struct.GrpcConfiguration.html\" title=\"struct oak_runtime::GrpcConfiguration\">GrpcConfiguration</a>","synthetic":true,"types":["oak_runtime::GrpcConfiguration"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak_runtime/proto/oak/authentication/struct.AuthParameters.html\" title=\"struct oak_runtime::proto::oak::authentication::AuthParameters\">AuthParameters</a>","synthetic":true,"types":["oak_runtime::proto::oak::authentication::AuthParameters"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak_runtime/proto/oak/authentication/struct.IdentityTokenRequest.html\" title=\"struct oak_runtime::proto::oak::authentication::IdentityTokenRequest\">IdentityTokenRequest</a>","synthetic":true,"types":["oak_runtime::proto::oak::authentication::IdentityTokenRequest"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak_runtime/proto/oak/authentication/struct.IdentityTokenResponse.html\" title=\"struct oak_runtime::proto::oak::authentication::IdentityTokenResponse\">IdentityTokenResponse</a>","synthetic":true,"types":["oak_runtime::proto::oak::authentication::IdentityTokenResponse"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak_runtime/auth/oidc_utils/struct.Claims.html\" title=\"struct oak_runtime::auth::oidc_utils::Claims\">Claims</a>","synthetic":true,"types":["oak_runtime::auth::oidc_utils::Claims"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak_runtime/auth/oidc_utils/struct.ClientInfo.html\" title=\"struct oak_runtime::auth::oidc_utils::ClientInfo\">ClientInfo</a>","synthetic":true,"types":["oak_runtime::auth::oidc_utils::ClientInfo"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak_runtime/auth/oidc_utils/struct.TokenError.html\" title=\"struct oak_runtime::auth::oidc_utils::TokenError\">TokenError</a>","synthetic":true,"types":["oak_runtime::auth::oidc_utils::TokenError"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak_runtime/io/struct.Receiver.html\" title=\"struct oak_runtime::io::Receiver\">Receiver</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["oak_runtime::io::Receiver"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak_runtime/io/struct.Sender.html\" title=\"struct oak_runtime::io::Sender\">Sender</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["oak_runtime::io::Sender"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak_runtime/message/struct.Message.html\" title=\"struct oak_runtime::message::Message\">Message</a>","synthetic":true,"types":["oak_runtime::message::Message"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak_runtime/message/struct.NodeMessage.html\" title=\"struct oak_runtime::message::NodeMessage\">NodeMessage</a>","synthetic":true,"types":["oak_runtime::message::NodeMessage"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak_runtime/metrics/struct.GrpcServerMetrics.html\" title=\"struct oak_runtime::metrics::GrpcServerMetrics\">GrpcServerMetrics</a>","synthetic":true,"types":["oak_runtime::metrics::GrpcServerMetrics"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak_runtime/metrics/struct.RuntimeMetrics.html\" title=\"struct oak_runtime::metrics::RuntimeMetrics\">RuntimeMetrics</a>","synthetic":true,"types":["oak_runtime::metrics::RuntimeMetrics"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak_runtime/metrics/struct.Metrics.html\" title=\"struct oak_runtime::metrics::Metrics\">Metrics</a>","synthetic":true,"types":["oak_runtime::metrics::Metrics"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"oak_runtime/node/enum.ConfigurationError.html\" title=\"enum oak_runtime::node::ConfigurationError\">ConfigurationError</a>","synthetic":true,"types":["oak_runtime::node::ConfigurationError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak_runtime/node/grpc/client/struct.GrpcClientNode.html\" title=\"struct oak_runtime::node::grpc::client::GrpcClientNode\">GrpcClientNode</a>","synthetic":true,"types":["oak_runtime::node::grpc::client::GrpcClientNode"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak_runtime/node/grpc/server/struct.GrpcServerNode.html\" title=\"struct oak_runtime::node::grpc::server::GrpcServerNode\">GrpcServerNode</a>","synthetic":true,"types":["oak_runtime::node::grpc::server::GrpcServerNode"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak_runtime/runtime/struct.ChannelHalf.html\" title=\"struct oak_runtime::runtime::ChannelHalf\">ChannelHalf</a>","synthetic":true,"types":["oak_runtime::runtime::channel::ChannelHalf"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak_runtime/runtime/struct.NodePrivilege.html\" title=\"struct oak_runtime::runtime::NodePrivilege\">NodePrivilege</a>","synthetic":true,"types":["oak_runtime::runtime::NodePrivilege"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak_runtime/runtime/struct.NodeId.html\" title=\"struct oak_runtime::runtime::NodeId\">NodeId</a>","synthetic":true,"types":["oak_runtime::runtime::NodeId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak_runtime/runtime/struct.AuxServer.html\" title=\"struct oak_runtime::runtime::AuxServer\">AuxServer</a>","synthetic":true,"types":["oak_runtime::runtime::AuxServer"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak_runtime/runtime/struct.Runtime.html\" title=\"struct oak_runtime::runtime::Runtime\">Runtime</a>","synthetic":true,"types":["oak_runtime::runtime::Runtime"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"oak_runtime/runtime/struct.RuntimeProxy.html\" title=\"struct oak_runtime::runtime::RuntimeProxy\">RuntimeProxy</a>","synthetic":true,"types":["oak_runtime::runtime::RuntimeProxy"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"oak_runtime/runtime/enum.ChannelHalfDirection.html\" title=\"enum oak_runtime::runtime::ChannelHalfDirection\">ChannelHalfDirection</a>","synthetic":true,"types":["oak_runtime::runtime::channel::ChannelHalfDirection"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"oak_runtime/runtime/enum.NodeReadStatus.html\" title=\"enum oak_runtime::runtime::NodeReadStatus\">NodeReadStatus</a>","synthetic":true,"types":["oak_runtime::runtime::NodeReadStatus"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"oak_runtime/runtime/enum.ReadStatus.html\" title=\"enum oak_runtime::runtime::ReadStatus\">ReadStatus</a>","synthetic":true,"types":["oak_runtime::runtime::ReadStatus"]}];
implementors["roughenough"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"roughenough/struct.RtMessage.html\" title=\"struct roughenough::RtMessage\">RtMessage</a>","synthetic":true,"types":["roughenough::message::RtMessage"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"roughenough/enum.Error.html\" title=\"enum roughenough::Error\">Error</a>","synthetic":true,"types":["roughenough::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"roughenough/enum.Tag.html\" title=\"enum roughenough::Tag\">Tag</a>","synthetic":true,"types":["roughenough::tag::Tag"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"roughenough/client/struct.ParsedResponse.html\" title=\"struct roughenough::client::ParsedResponse\">ParsedResponse</a>","synthetic":true,"types":["roughenough::client::ParsedResponse"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"roughenough/client/struct.ResponseHandler.html\" title=\"struct roughenough::client::ResponseHandler\">ResponseHandler</a>","synthetic":true,"types":["roughenough::client::ResponseHandler"]}];
implementors["runner"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"runner/struct.Example.html\" title=\"struct runner::Example\">Example</a>","synthetic":true,"types":["runner::Example"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"runner/internal/struct.Opt.html\" title=\"struct runner::internal::Opt\">Opt</a>","synthetic":true,"types":["runner::internal::Opt"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"runner/internal/struct.BuildExamples.html\" title=\"struct runner::internal::BuildExamples\">BuildExamples</a>","synthetic":true,"types":["runner::internal::BuildExamples"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"runner/internal/struct.RunExamples.html\" title=\"struct runner::internal::RunExamples\">RunExamples</a>","synthetic":true,"types":["runner::internal::RunExamples"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"runner/internal/struct.BuildServer.html\" title=\"struct runner::internal::BuildServer\">BuildServer</a>","synthetic":true,"types":["runner::internal::BuildServer"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"runner/internal/struct.Context.html\" title=\"struct runner::internal::Context\">Context</a>","synthetic":true,"types":["runner::internal::Context"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"runner/internal/struct.SingleStatusResult.html\" title=\"struct runner::internal::SingleStatusResult\">SingleStatusResult</a>","synthetic":true,"types":["runner::internal::SingleStatusResult"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"runner/internal/struct.Cmd.html\" title=\"struct runner::internal::Cmd\">Cmd</a>","synthetic":true,"types":["runner::internal::Cmd"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"runner/internal/struct.Running.html\" title=\"struct runner::internal::Running\">Running</a>","synthetic":true,"types":["runner::internal::Running"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"runner/internal/enum.Command.html\" title=\"enum runner::internal::Command\">Command</a>","synthetic":true,"types":["runner::internal::Command"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"runner/internal/enum.StatusResultValue.html\" title=\"enum runner::internal::StatusResultValue\">StatusResultValue</a>","synthetic":true,"types":["runner::internal::StatusResultValue"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"runner/internal/enum.Step.html\" title=\"enum runner::internal::Step\">Step</a>","synthetic":true,"types":["runner::internal::Step"]}];
implementors["split_grpc_client"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"split_grpc_client/proto/struct.HelloRequest.html\" title=\"struct split_grpc_client::proto::HelloRequest\">HelloRequest</a>","synthetic":true,"types":["split_grpc_client::proto::HelloRequest"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"split_grpc_client/proto/struct.HelloResponse.html\" title=\"struct split_grpc_client::proto::HelloResponse\">HelloResponse</a>","synthetic":true,"types":["split_grpc_client::proto::HelloResponse"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"split_grpc_client/proto/hello_world_client/struct.HelloWorldClient.html\" title=\"struct split_grpc_client::proto::hello_world_client::HelloWorldClient\">HelloWorldClient</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["split_grpc_client::proto::hello_world_client::HelloWorldClient"]}];
implementors["split_grpc_server"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"split_grpc_server/struct.HelloWorldHandler.html\" title=\"struct split_grpc_server::HelloWorldHandler\">HelloWorldHandler</a>","synthetic":true,"types":["split_grpc_server::HelloWorldHandler"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"split_grpc_server/proto/struct.HelloRequest.html\" title=\"struct split_grpc_server::proto::HelloRequest\">HelloRequest</a>","synthetic":true,"types":["split_grpc_server::proto::HelloRequest"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"split_grpc_server/proto/struct.HelloResponse.html\" title=\"struct split_grpc_server::proto::HelloResponse\">HelloResponse</a>","synthetic":true,"types":["split_grpc_server::proto::HelloResponse"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"split_grpc_server/proto/hello_world_server/struct._Inner.html\" title=\"struct split_grpc_server::proto::hello_world_server::_Inner\">_Inner</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["split_grpc_server::proto::hello_world_server::_Inner"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()