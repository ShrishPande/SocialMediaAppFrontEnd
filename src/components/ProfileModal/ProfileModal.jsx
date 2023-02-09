import { Modal, useMantineTheme } from "@mantine/core";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { uploadImage } from "../../actions/uploadAction";
import { updateUser } from "../../actions/UserAction";

function ProfileModal({ modalOpened, setModalOpened, data }) {
  const theme = useMantineTheme();

  const { password, ...other } = data;
  const [formData, setFormData] = useState(other);
  const [ profilePicture, setProfilePicture ] = useState(null);
  const [ coverPicture, setCoverPicture ] = useState(null);
  const dispatch = useDispatch();
  const param = useParams();
  const { user } = useSelector((state) => state.authReducer.authData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      e.target.name === "profilePicture"
        ? setProfilePicture(img)
        : setCoverPicture(img);
    }
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    let userData=formData;
    if(profilePicture){
      const data=new FormData();
      const fileName=Date.now()+profilePicture.name;
      data.append("name",fileName);
      data.append("file",profilePicture);
      userData.profilePicture=fileName;
      try{
        dispatch(uploadImage(data))
      }catch(error){
        console.log(error)
      }
    }
    if(coverPicture){
      const data=new FormData();
      const fileName=Date.now()+coverPicture.name;
      data.append("name",fileName);
      data.append("file",coverPicture);
      userData.coverPicture=fileName;
      try{
        dispatch(uploadImage(data))
      }catch(error){
        console.log(error)
      }
    }
    dispatch(updateUser(param.id,userData))
    setModalOpened(false);
  }

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm">
        <h3>Your info</h3>
        <div>
          <input
            type="text"
            className="infoInput"
            name="firstname"
            placeholder="First Name"
            onChange={handleChange}
            value={formData.firstname}
          />
          <input
            type="text"
            className="infoInput"
            name="lastname"
            placeholder="Last Name"
            onChange={handleChange}
            value={formData.lastname}
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="worksAt"
            placeholder="Works At"
            onChange={handleChange}
            value={formData.worksAt}
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="livesin"
            placeholder="Lives In"
            onChange={handleChange}
            value={formData.livesin}
          />
          <input
            type="text"
            className="infoInput"
            name="country"
            placeholder="Country"
            onChange={handleChange}
            value={formData.country}
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="relationship"
            placeholder="Relationship Status"
            onChange={handleChange}
            value={formData.relationship}
          />
        </div>
        <div>
          Profile Image
          <input type="file" name="profilePicture" onChange={onImageChange} />
          Cover Image
          <input type="file" name="coverPicture" onChange={onImageChange} />
        </div>
        <button className="button info-button" onClick={handleSubmit}>Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
