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
import { Loader } from "lucide-react";
import { userProfileUpdate } from "@/redux/slices/authSlice";
import { useState } from "react";

const ProfileSettings = () => {
  const { isProfileSettingsOpen } = useSelector((state) => state.ui);
  const { user, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [name,setName] = useState(user?.name)

  const updateProfile = (e) => {
    
    if (name) {
      dispatch(userProfileUpdate(name));
    }
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
              id="name"
              name="name"
              placeholder="sohit roy"
              defaultValue={user?.name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          {/* <div className="space-y-1">
              <Label htmlFor="password">New Password</Label>
              <Input id="password" name="password" placeholder="New Password" />
            </div> */}
        </div>
        <DialogFooter>
          <Button type="button" onClick={updateProfile} disabled={isLoading}>
            {isLoading ? (
              <Loader size={28} className="animate-spin" />
            ) : (
              "Save Changes"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileSettings;
