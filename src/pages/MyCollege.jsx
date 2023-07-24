import useMyCollege from '../hooks/useMyCollege'


const MyCollege = () => {
 const myColleges = useMyCollege()
 console.log(myColleges);
  return (
    <div className="container mx-auto my-16">
      <h1 className="text-center text-5xl text-blue-950 font-bold mb-20">My applied college</h1>
      <div className="grid grid-cols-1 gap-10"></div>
     
    </div>
  );
};

export default MyCollege;
