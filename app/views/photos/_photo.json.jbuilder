json.extract! photo, :id, :title, :caption, :resource, :hidden, :created_at, :updated_at
json.url photo_url(photo, format: :json)
