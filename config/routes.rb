Rails.application.routes.draw do
  resources :invites
  resources :managers_reports
  resources :reports
  resources :managers
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
