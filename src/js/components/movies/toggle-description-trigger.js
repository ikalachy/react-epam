import React from "react";

export const ToggleMovieDescriptionTrigger = React.memo(({ toggleDescription }) => (
  <div onClick={toggleDescription}>
    Show details
  </div>
));
