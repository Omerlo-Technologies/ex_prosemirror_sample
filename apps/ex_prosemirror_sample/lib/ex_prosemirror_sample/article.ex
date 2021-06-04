defmodule ExProsemirrorSample.Article do
  @moduledoc false

  use Ecto.Schema
  use ExProsemirror.Schema

  import Ecto.Changeset
  import ExProsemirror.Changeset

  schema "article" do
    prosemirror_field :title
    prosemirror_field :body
  end

  def changeset(struct_or_changeset, attrs \\ %{}) do
    struct_or_changeset
    |> cast(attrs, [])
    |> cast_prosemirror(attrs, :title, required: true)
  end
end
