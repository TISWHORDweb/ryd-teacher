import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserInfoProps } from "./_model";
// import { UserInfoModel } from "./models";

interface ActivityStateProps {
  userActivity: any;
}

const initialState: ActivityStateProps = {
  userActivity: [],
};

const activitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {
    setUserActivity: (
      state: any,
      action: PayloadAction<{ userInfo: any, isLoggedIn: boolean }>,
    ) => {
      state.userActivity = action?.payload;
    },
    
  },
});

export const { setUserActivity } = activitySlice.actions;
export default activitySlice.reducer;
