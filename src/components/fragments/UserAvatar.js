import { BigHead } from "@bigheads/core";

function UserAvatar(props) {
  const {
    accessory,
    body,
    clothing,
    clothingColor,
    eyebrows,
    eyes,
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
  } = props.avatar;

  return (
    <div
      key={props.username}
      className="user-avatar flex flex-col items-center gap-y-3"
    >
      <BigHead width= {props.width}
        accessory={accessory}
        body={body}
            clothing={clothing}
            clothingColor={clothingColor}
            eyes={eyes} 
            eyebrows={eyebrows}
            facialHair={facialHair}
            graphic={graphic}
            hair={hair}
            hairColor={hairColor}
            hat={hat}
            hatColor={hatColor}
            lipColor={lipColor}
            mask={{ mask }}
            mouth={mouth}
            skinTone={skinTone}
      />
      <h3 className="uppercase text-gray-50 tracking-widest font-semibold">
        {props.username}
      </h3>
    </div>
  );
}

export default UserAvatar;
