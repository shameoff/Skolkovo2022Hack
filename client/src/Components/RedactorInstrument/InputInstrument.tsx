import React, { FC } from "react";
import styles from "./Instrument.module.scss";
import axios from "axios";
import { useAppDispatch } from "@redux/hooks";
import { setVideo } from "@redux/store/videoSlice";

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
            console.log(file);

            let reader = new FileReader();
            reader.readAsArrayBuffer(file);

            let config = {
                header: {
                    'Content-Type': 'multipart/form-data'
                }
            }

            reader.onload = function() {
                console.log(reader.result);
                dispatch(setVideo(reader.result as ArrayBuffer));
                axios.post(`http://localhost:3000/video`, formData, config).then((res) => {
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
        onChange={(e) => onSelectHandler(e.target.files!)}
        />
    </div>
    )
};

export default InputInstrument;
