import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <>
    <div>
        <div>
      <h4>Id: </h4> <p>1</p>
      <br />
      <h4>name: </h4> <p>Alejandra Donnelly</p>
      <br />
    
      <h4>email: </h4> <p>Bartholome.Zulauf@yahoo.com</p>
      <br />
    
      <Link to="/edit-profile/1">Edit Profile</Link>
      </div>

      <div>
      <h4>Id: </h4> <p>2</p>
      <br />
      <h4>name: </h4> <p>Cornelius Leuschke</p>
      <br />
    
      <h4>email: </h4> <p>Lois.Schneider@gmail.com</p>
      <br />
    
      <Link to="/edit-profile/2">Edit Profile</Link>
      </div>
      </div>
    </>
  );
}
