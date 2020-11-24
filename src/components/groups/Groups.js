import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

export default function Groups() {
  return (
      <div>
    <div className="App" style={{ backgroundColor:"#006699"}}>
      <WhiteTextTypography variant="h3">
        About us
      </WhiteTextTypography>
    </div>
    <div>
    <Typography variant="h5" style={{ backgroundColor:" #e6ffff" }}>
    Along with FAQ and Contact pages, the About Us page is one of the first supporting pages you'll likely create for your website, regardless of the industry you're in.

They may go by different labels—“About”, “Story”, “Mission”—but these types of pages generally serve the same key purpose: to be the go-to page for a brand to say, “This is who we are.”

When a visitor wants to learn more about you or your business, it's the page they'll look for.

Unfortunately, About Us pages are too often treated as an obligation rather than the valuable opportunity they are to connect with your customers by selling your story, your vision, your mission, and what makes you, YOU.
                </Typography>
    </div>
    </div>
  );
}
