import React, { useState } from "react";

const CityInput = (props) => {

    const [getloc,setGetloc] = useState("")

    return (
        <div className="col-12 search">
        <input
          onChange={(e) => {
            setGetloc(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.keyCode === 13){
                props.setLocation(getloc)
            }}}
          type="text"
          placeholder="Search location"
        />
      </div>
    )

}

export default CityInput;