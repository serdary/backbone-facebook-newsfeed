Myfeed::Application.routes.draw do
  get "sessions/connect_fb"

  get "sessions/fb_callback"

  resources :feeds

  get "home/index"

  root :to => 'home#index'
end