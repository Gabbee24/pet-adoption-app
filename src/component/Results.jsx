import Pet from "./Pet";

const Results = ({pets}) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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