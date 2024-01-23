# README

PhotoGo is a sample application I wrote in 2020 for an interview, here's a breakdown of the stack.
* Ruby on Rails 6.1 (initially 6.0)
* CarrierWave + FOG for file handling (Rails 4 app in prod, so I was told not to use ActiveStorage yet)
* Bootstrap front-end

## What does it do?
PhotoGo is a simple photo upload app, similar to Instagram in function.
Users can create accounts, upload photos, add them to albums, and comment on both their and other people's photos.
There is also mailer functionality.

## Plans
If there is interest, I'll incorporate ActiveStorage.
Updating to Rails 7 would be nice, I actually forgot Rails 6 uses NPM.
Since I didn't use devise, that means that's it for plans.