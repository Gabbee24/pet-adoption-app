import Pet from "./Pet";

const Results = ({pets}) => {
  return (
    <div>
        {!pets.length ? (
            <h1>Loading...</h1>
        ) : (
            pets.map(pet => (
                <Pet
                    animal={pet.animal}
                    id={pet.id}
                    key={pet.id}
                    breed={pet.breed}
                    images={pet.images}
                    name={pet.name}
                    location={`${pet.city}, ${pet.state}`}
                />
            ))
        )}
    </div>
  )
}

export default Results