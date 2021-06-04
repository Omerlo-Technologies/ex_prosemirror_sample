# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

# Configures the endpoint
config :ex_prosemirror_sample, ExProsemirrorSampleWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "ouhzBy/Zpja1CSWBPi0JJlYZ6zT9+u4WCQ8ydKPdJzYUBcgwZxK7XfiyQIi6h34g",
  render_errors: [view: ExProsemirrorSampleWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: ExProsemirrorSample.PubSub,
  live_view: [signing_salt: "EgLJAFNI"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

config :ex_prosemirror,
  debug: true

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
