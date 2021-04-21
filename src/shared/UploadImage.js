// 이미지 업로드
import React from 'react'
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

// import TextField from '@material-ui/core/TextField';
import {useDispatch, useSelector} from "react-redux";
import {actionCreators as imageActions} from "../redux/modules/image"

const UploadImage = (props) => {
  const dispatch = useDispatch();
  const preview = useSelector((state) => state.image.profile_preview)
  const is_uploading = useSelector(state => state.image.uploading)
  const fileInput = React.useRef();

  const selectFile = (e) => {
    console.log(e.target.value);
    console.log(fileInput.current.files[0]);
    props.setImage(fileInput.current.files[0]);  // 이 부분이 사진을 파일로 보내는 핵심
    const reader = new FileReader();
    const file = fileInput.current.files[0]

    // if(window.location.href === 
    //     "http://locationhost:3000/mypage" && file === undefined) {
    //   dipatch(imageActions.profilePreview(preview))
    //   return;
    // }
    if (file === undefined){
      dispatch(imageActions.setPreview("http://via.placeholder.com/400x300"))
      return
    }
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      console.log(reader.result);
      dispatch(imageActions.setPreview(reader.result))
    }
  }

  return (
    <React.Fragment>
        <Button
            variant="outlined"
            component="label"
            color="default"
            startIcon={<CloudUploadIcon />}
            size = "small"
            style={{marginBottom:"15px"}}
          >
            
            <input id={"file-input"} style={{ display: 'none' }} type="file" name="imageFile"
              onChange={selectFile} ref={fileInput} disabled={is_uploading}
            />
            Picture
        </Button>
    </React.Fragment>    
  ) 
}

export default UploadImage;