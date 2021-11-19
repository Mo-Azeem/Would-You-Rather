import SelectMenu from "../fragments/SelectMenu";
import { BigHead } from "@bigheads/core";
import { connect } from 'react-redux'
import React from "react";
import {handleCreateUser} from '../../actions/users'
import { Navigate } from 'react-router-dom'  

class AvatarCreationForm extends React.Component {
  state = {
    avatar: {
      accessory: "none",
      body: "chest",
      circleColor: "blue",
      clothing: "naked",
      clothingColor: "white",
      eyebrows: "raised",
      eyes: "normal",
      faceMask: false,
      faceMaskColor: "white",
      facialHair: "none",
      graphic: "none",
      hair: "none",
      hairColor: "blonde",
      hat: "none",
      hatColor: "white",
      lashes: true,
      lipColor: "red",
      mask: true,
      mouth: "grin",
      skinTone: "light",
    },
    username: '',
    displayname: '',
    isSubmit: false
  };

  handleAvatarFormChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState((oldState) => {
      return {
        avatar: {
          ...oldState.avatar,
          [e.target.name]: e.target.value,
        },
      };
    });
  };

  handleUserInfoInput = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: name ==='username' ? value.trim('') : value
    })
  }

  handleSubmitForm = (e) => {
    e.preventDefault()
    const userInfoForm = document.getElementById('user-info-form')
    const isFormValid = userInfoForm.checkValidity()
    
    if(!isFormValid) return alert("Cannot Leave Username or Display Name Empty")

    const {username,displayname,avatar} = this.state
    this.props.dispatch(handleCreateUser({username,displayname,avatar}))
    this.setState({
      isSubmit: true
    })
  }

  render() {
    const {
      accessory,
      body,
      clothing,
      clothingColor,
      eyebrows,
      eyes,
      faceMask,
      faceMaskColor,
      facialHair,
      graphic,
      hair,
      hairColor,
      hat,
      hatColor,
      lipColor,
      mask,
      mouth,
      skinTone,
    } = this.state.avatar;
    const {username, displayname,isSubmit} = this.state
    return (
      <div className="avatar-creation flex flex-row items-center justify-center gap-x-8">
        {isSubmit && <Navigate to="/" />}
        <div className="avatar -mt-32">
            <BigHead
            width="25vw"
            accessory={accessory}
            body={body}
            clothing={clothing}
            clothingColor={clothingColor}
            eyebrows={eyebrows}
            eyes={eyes}
            faceMask={faceMask}
            faceMaskColor={faceMaskColor}
            facialHair={facialHair}
            graphic={graphic}
            hair={hair}
            hairColor={hairColor}
            hat={hat}
            hatColor={hatColor}
            lashes={true}
            lipColor={lipColor}
            mask={{ mask }}
            mouth={mouth}
            skinTone={skinTone}
            />
        </div>

        <div className="user-creation-form flex flex-col items-center gap-y-4">
          <form id='user-info-form' className="user-info">
            <input
              className="text-center w-56 px-3 py-2 outline-none rounded-full bg-gray-50 text-gray-900 m-2"
              type="text"
              placeholder="Username"
              name="username"
              id="username"
              value={username}
              onChange={this.handleUserInfoInput}
              required
            />
            <input
              className="text-center w-56 px-3 py-2 outline-none rounded-full bg-gray-50 text-gray-900 m-2"
              type="text"
              placeholder="Display Name"
              name="displayname"
              id="displayname"
              value={displayname}
              onChange={this.handleUserInfoInput}
              required
            />
          </form>
          <form
            id='avatar-setting-form'
            className="features flex flex-row flex-wrap gap-3 justify-center"
            style={{}}
            onChange={this.handleAvatarFormChange}
          >
            <SelectMenu
              name="accessory"
              value="accessory"
              values={["none", "roundGlasses", "tinyGlasses", "shades"]}
            />
            <SelectMenu
              name="body"
              value="body"
              values={["chest", "breasts"]}
            />

            <SelectMenu
              name="clothing"
              value="clothing"
              values={[
                "naked",
                "shirt",
                "dressShirt",
                "vneck",
                "tankTop",
                "dress",
              ]}
            />
            <SelectMenu
              name="clothingColor"
              value="clothingColor"
              values={["white", "blue", "black", "green", "red"]}
            />
            <SelectMenu
              name="eyebrows"
              value="eyebrows"
              values={[
                "raised",
                "leftLowered",
                "serious",
                "angry",
                "concerned",
              ]}
            />
            <SelectMenu
              name="eyes"
              value="eyes"
              values={[
                "normal",
                "leftTwitch",
                "happy",
                "content",
                "squint",
                "simple",
                "dizzy",
                "wink",
                "heart",
              ]}
            />
            <SelectMenu
              name="facialHair"
              value="facialHair"
              values={["none", "stubble", "mediumBeard"]}
            />
            <SelectMenu
              name="graphic"
              value="graphic"
              values={["none", "redwood", "gatsby", "vue", "react", "graphQL"]}
            />
            <SelectMenu
              name="hair"
              value="hair"
              values={[
                "none",
                "long",
                "bun",
                "short",
                "pixie",
                "balding",
                "buzz",
                "afro",
                "bob",
              ]}
            />
            <SelectMenu
              name="hairColor"
              value="hairColor"
              values={[
                "blonde",
                "orange",
                "black",
                "white",
                "brown",
                "blue",
                "pink",
              ]}
            />
            <SelectMenu
              name="hat"
              value="hat"
              values={["none", "beanie", "turban"]}
            />
            <SelectMenu
              name="hatColor"
              value="hatColor"
              values={["white", "blue", "black", "green", "red"]}
            />
            <SelectMenu
              name="lipColor"
              value="lipColor"
              values={["red", "purple", "pink", "turqoise", "green"]}
            />
            <SelectMenu
              name="mouth"
              value="mouth"
              values={[
                "grin",
                "sad",
                "openSmile",
                "lips",
                "open",
                "serious",
                "tongue",
              ]}
            />
            <SelectMenu
              name="skinTone"
              value="skinTone"
              values={["light", "yellow", "brown", "dark", "red", "black"]}
            />
          </form>
        </div>
        <button form='user-info-form' 
        onClick= {this.handleSubmitForm}
        className="submit-btn font-bold text-gray-50 bg-green-500 px-10 py-2 rounded-full hover:bg-green-400">
            Proceed
        </button>
        
      </div>
    );
  }
}


export default connect()(AvatarCreationForm);
