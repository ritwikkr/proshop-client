interface UserState {
  isLoading: boolean;
  data: UserData | null;
  isError: boolean;
  errorMsg: string;
  updationComplete: boolean;
  emailSent: boolean;
  passwordReseted: boolean;
  jwtExpired: boolean;
}

interface Address {
  name: string;
  phoneNumber: string;
  address: string;
  city: string;
  state: string;
  postal: number;
  country: string;
  _id: string;
}

interface UserData {
  token: string;
  user: {
    _id: string;
    googleId?: string;
    email: string;
    name: string;
    address: Address[];
    wishlist: string[];
    isVerified: boolean;
  };
}

interface CreateSessionThunkArgs {
  sessionType: string;
  userData: {
    _id?: string;
    googleId?: string;
    name?: string;
    email: string;
    password?: string;
    confirmPassword?: string;
    token?: string;
    wishlist?: string[];
    address?: Address[];
  };
}

interface UpdateUserThunkArgs {
  // Add fields of profile page
  id: string;
}

interface AddUserAddressThunkArgs {
  userAddress: {
    address: string;
    city: string;
    postal_code: string;
    country: string;
  };
  userId: string;
}

interface DeleteUserAddressThunkArgs {
  userId: string;
  addressId: string;
}

interface PasswordDetails {
  currPassword: string;
  newPassword: string;
  renewPassword: string;
}

interface UpdatePasswordThunkArgs {
  passwordDetails: PasswordDetails;
  id: string;
}

interface ForgotPasswordThunkArgs {
  email: string;
}

interface ResetPasswordThunkArgs {
  password: {
    newPassword: string;
    confirmPassword: string;
  };
  token: string;
}

interface CheckJWTExpiryThunkArgs {
  token: string;
}

export {
  UserState,
  CheckJWTExpiryThunkArgs,
  ResetPasswordThunkArgs,
  ForgotPasswordThunkArgs,
  UpdatePasswordThunkArgs,
  DeleteUserAddressThunkArgs,
  AddUserAddressThunkArgs,
  UpdateUserThunkArgs,
  CreateSessionThunkArgs,
  UserData,
  Address,
};
