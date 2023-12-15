import { Separator } from "../../components/ui/separator";
import { ProfileForm } from "@/app/settings/profile-form";

export default function SettingsProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Master Owner Account</h3>
        <p className="text-sm text-muted-foreground">
          This is where you add details about your legal entity.
        </p>
      </div>
      <Separator />
      <ProfileForm />
    </div>
  );
}
