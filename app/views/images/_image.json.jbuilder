json.extract! image, :id, :title, :caption, :resource, :created_at, :updated_at
json.url image_url(image, format: :json)
