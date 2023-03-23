// register user
router.post("/", registerUser)

// login user
router.post("/login", loginUser)

// get logged in user
router.get("/me", protect, getMe)
