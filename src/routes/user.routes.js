import { Router } from "express";
import {
  accessRefreshToken,
  changeAvatar,
  changeCoverImage,
  changePassword,
  getChannelDetails,
  getUserData,
  getWatchHistory,
  loginUser,
  logoutUser,
  registerUser,
  updateUserDetails,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

router.route("/login").post(loginUser);

// Secured routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(accessRefreshToken);

router.route("/change-password").post(verifyJWT, changePassword);
router.route("/change-details").patch(verifyJWT, updateUserDetails);

router.route("/get-user-data").get(getUserData);

router
  .route("/change-avatar")
  .patch(verifyJWT, upload.single("avatar"), changeAvatar);
router
  .route("/change-cover-image")
  .post(verifyJWT, upload.single("coverImage"), changeCoverImage);

router.route("/c/:username").get(verifyJWT, getChannelDetails);
router.route("/history").get(verifyJWT, getWatchHistory);

export default router;
