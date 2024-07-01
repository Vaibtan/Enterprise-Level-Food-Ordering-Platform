import { useUpdateMyUser } from "@/api/MyUserAPI";
import UserProfileForm from "@/forms/user-profile-forms/UserProfileForm";

const UserProfilePage = () => {
    const { updateUser, isLoading } = useUpdateMyUser();

    return (
        <UserProfileForm onSave = {updateUser} isLoading = {isLoading} />
    );
};

export default UserProfilePage; 