import {React,useEffect,useState} from 'react'
import MyContext from './MyContext';
import { Timestamp, addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { fireDB } from '../FireBase/FireBase';

function MyState(props) {
    const [mode, setMode] = useState('light');

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'rgb(17, 24, 39)';
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = 'white';

        }
    }

    const [ products, setProducts] = useState({
      title:null,
      price:null,
      imageUrl:null,
      category:null,
      description:null,
      time:Timestamp.now(),
      date: new Date().toLocaleString(
        "en-US",{
          month:"short",
          day:"2-digit",
          year:"numeric"
        }
      )
    });

    const addProduct = async () => {
      if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
        return toast.error('Please fill all fields')
      }
      const productRef = collection(fireDB, "products")
      setLoading(true)
      try {
        await addDoc(productRef, products)
        toast.success("Product Add successfully")
        getProductData()
        setTimeout(()=>{
          window.location.href = '/dashboard'
        },800)
        closeModal()
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
      setProducts("")
    }
  
    const [product, setProduct] = useState([]);
  
    // ****** get product
    const getProductData = async () => {
      setLoading(true)
      try {
        const q = query(
          collection(fireDB, "products"),
          orderBy("time"),
          // limit(5)
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
          let productsArray = [];
          QuerySnapshot.forEach((doc) => {
            productsArray.push({ ...doc.data(), id: doc.id });
          });
          setProduct(productsArray)
          setLoading(false);
        });
        return () => data;
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }

    useEffect(()=>{
      getProductData();
    },[]);



    const [loading,setLoading] = useState(false);




  return (
    <MyContext.Provider value={{mode,toggleMode,loading,setLoading,products,setProducts,product,addProduct}}>
       {props.children}
    </MyContext.Provider>
  )
}

export default MyState