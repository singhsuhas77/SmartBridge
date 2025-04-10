function UserCard({ name, email }) {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-4 bg-white">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{email}</p>
      </div>
    );
  }
  
  export default UserCard;