import React, { FC } from "react";
import styles from "./Instrument.module.scss";
import axios from "axios";
import { useAppDispatch } from "@redux/hooks";
import { setVideo } from "@redux/store/videoSlice";
import constant from "@src/constants/constant";

interface InstrumentProps {
  src: any;
}

const InputInstrument: FC<InstrumentProps> = () => {
    const dispatch = useAppDispatch();
    const onSelectHandler = (files: FileList) => {
        try {
            const file = files[0];
            const formData = new FormData();
            formData.append('file', file);

            let reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = function(e) {
                dispatch(setVideo(e.target!.result!.toString() as string))
                axios.post(`${constant.host}/video`, formData, {
                    headers: {'Content-Type': 'multipart/form-data' }
                }).then((res) => {
                    console.log(res);
                })
            }

            reader.onerror = function() {
                console.log(reader.error);
            }


        } catch(err) {
            console.log(err);
        }
    }

    return (
    <div
        className={styles.Instrument}
        data-testid="Instrument">
        <input
        type="file"
        className={styles.Input}
        onChange={(e) => { onSelectHandler(e.target.files!); e.target.value = ""; }}
        />
    </div>
    )
};

export default InputInstrument;
