import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import R1 from "../assets/Academic.jpg";
import R2 from "../assets/design.jpg";
import R3 from "../assets/howpeople.jpg";

const Research = () => {
  return (
    <div className="my-20 container mx-auto">
      <h1 className="text-center font-bold mb-20 text-5xl text-blue-950 ">
        Research
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-y-7 items-stretch place-items-center">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={R1}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Academically Adrift :  Limited Learning on College 
            </Typography>
            <Typography variant="body2" color="text.secondary">
             
            </Typography>
            <p className="text-blue-950 font-semibold">
              By: Richard Arum and Josipa Roksa
            </p>
          </CardContent>
          <CardActions>
            
          <Button href="https://www.amazon.com/Academically-Adrift-Limited-Learning-Campuses/dp/0226028569?"  target="_blank" size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card className="" sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={R2}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            The Design Of Everyday Things
            </Typography>
            <Typography variant="body2" color="text.secondary">
           
            </Typography>
            <p className="text-blue-950 font-semibold">
              By: Donald A. Norman
            </p>
          </CardContent>
          <CardActions>
            
            <Button href="https://www.amazon.com/Design-Everyday-Things-Revised-Expanded/dp/0465050654"  target="_blank" size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={R3}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            How People Learn: Brain, Mind, Experience, & School
            </Typography>
            <Typography variant="body2" color="text.secondary">
            
            </Typography>
            <p className="text-blue-950 font-semibold">
              By: National Research Council
            </p>
          </CardContent>
          <CardActions>
            
          <Button href="https://www.amazon.com/How-People-Learn-Experience-Expanded/dp/0309070368"  target="_blank" size="small">Learn More</Button>
          </CardActions>
        </Card>
      
      </div>
    </div>
  );
};

export default Research;
