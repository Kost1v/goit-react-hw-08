import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div>
      <h3>Welcome {user.name}!</h3>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout ➡️
      </button>
    </div>
  );
};

export default UserMenu;
