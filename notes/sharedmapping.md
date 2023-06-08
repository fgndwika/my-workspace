Tried:

## 1. `~libs: './projects/libs/index.ts'`
### 1a. add `~libs` to each app's `sharedMapping` config.
Effect: `user.service` & `user.model` is only downloaded once
### 1b. add `~libs` to just app1's `sharedMapping` config. 
Effect: `user.service` & `user.model` is downloaded 3x (once for each app)
### 1c. add `~libs` to app1 and app2's `sharedMapping` config. 
Effect: `user.service` & `user.model` is downloaded 2x (1 for shell, 1 for both apps)

## 2. `~libs/*: './projects/libs/*'`
Effect: there is no sharing whatsoever. Each app has its own copy of `user.service` & `user.model`
