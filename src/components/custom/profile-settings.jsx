import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  closeProfileSettings,
  openProfileSettings,
} from "@/redux/slices/uiSlice";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { userProfileUpdate } from "@/redux/slices/authSlice";

const ProfileSettings = () => {
  const { isProfileSettingsOpen } = useSelector((state) => state.ui);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const name = useRef(user?.name);

  const updateProfile = (e) => {
    e.preventDefault();
    dispatch(userProfileUpdate(name));
  };

  return (
    <Dialog
      open={isProfileSettingsOpen}
      onOpenChange={(open) =>
        open
          ? dispatch(openProfileSettings())
          : dispatch(closeProfileSettings())
      }
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Profile Setting</DialogTitle>
          <DialogDescription>
            Personalize your profile, adjust preferences, and take control of
            your experience.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-2">
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input
              ref={name}
              id="name"
              name="name"
              placeholder="sohit roy"
              defaultValue={user?.name}
            />
          </div>
          {/* <div className="space-y-1">
              <Label htmlFor="password">New Password</Label>
              <Input id="password" name="password" placeholder="New Password" />
            </div> */}
        </div>
        <DialogFooter>
          <Button type="button" onClick={updateProfile}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileSettings;
