import React, {Component} from "react";
import Profile from "./Profile";
import {getProfile} from "../../redux/profile-reducer";
import {ProfileType, StateType} from "../../redux/types";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType & {
  match: {
    params: {
      userId: number
    }
  }
};

class ProfileContainer extends Component<ProfileContainerPropsType> {
  componentDidMount() {
    const userId = this.props.match.params.userId || 2;
    this.props.getProfile(userId);
  }

  render() {
    return <Profile {...this.props}/>;
  }
}

type MapStateToPropsType = ProfileType;
const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    userProfile: state.profilePage.userProfile,
  };
};

type MapDispatchToPropsType = {
  getProfile: (userId: number) => void
}

// @ts-ignore
const withRouterProfileContainer = withRouter(ProfileContainer);

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>(mapStateToProps, {getProfile})(withRouterProfileContainer);