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

use crate::{proto::oak::introspection_events::event::EventDetails, Runtime};

#[cfg(feature = "oak_unsafe")]
fn current_timestamp() -> prost_types::Timestamp {
    let duration_since_unix_epoch = std::time::SystemTime::now()
        .duration_since(std::time::UNIX_EPOCH)
        .expect("Time went backwards");

    prost_types::Timestamp {
        seconds: duration_since_unix_epoch.as_secs() as i64,
        nanos: duration_since_unix_epoch.subsec_nanos() as i32,
    }
}

// Introspection event related methods for the Runtime.
impl Runtime {
    /// Generates an introspection event recording a modification to the Runtime's
    /// internal data structures
    #[cfg(feature = "oak_unsafe")]
    pub fn introspection_event(&self, event_details: EventDetails) {
        let event = crate::proto::oak::introspection_events::Event {
            timestamp: Some(current_timestamp()),
            event_details: Some(event_details),
        };

        self.introspection_event_queue
            .lock()
            .unwrap()
            .push_back(event);
    }

    /// no-op implementation, introspection events are a debugging feature.
    #[cfg(not(feature = "oak_unsafe"))]
    pub fn introspection_event(&self, _event_details: EventDetails) {}
}
