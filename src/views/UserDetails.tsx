import { useEffect, useState } from "react";
import { getInitials } from "../utils";
import { useParams } from "react-router-dom";
import { UsersTable } from "../constants";

function UserDetails() {
  const id = useParams().id;

  const [user, setUser] = useState(null);

  function trouverObjetParID(tableau, id) {
    // Parcourir le tableau d'objets
    for (let i = 0; i < tableau.length; i++) {
      // Vérifier si l'ID de l'objet actuel correspond à l'ID recherché
      if (tableau[i].id === id) {
        // Retourner l'objet correspondant
        return tableau[i];
      }
    }
    // Retourner null si aucun objet correspondant n'est trouvé
    return null;
  }

  useEffect(() => {
    if (id) {
      setUser(trouverObjetParID(UsersTable, id));
      console.log(user);
    }
  }, [id]);

  return <div className="container mx-auto">{id}</div>;
}

export default UserDetails;
