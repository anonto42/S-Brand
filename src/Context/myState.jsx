import {React,useEffect,useState} from 'react'
import MyContext from './MyContext';
import { Timestamp, addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { fireDB } from '../FireBase/FireBase';

function MyState(props) {
  const [mode, setMode] = useState('light');
  
  const [loading,setLoading] = useState(false);
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

    // creacting product
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

    // add product
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
  
    // get product
    const getProductData = async () => {
      setLoading(true)
      try {
        const q = query(
          collection(fireDB, "products"),
          // orderBy("time"),
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
    
    //update product data

    const editHandle = (item)=>{
      setProducts(item)
    }
    const updateProduct = async () => {
      setLoading(true)
      try {

          await setDoc(doc(fireDB, 'products', products.id), products)
          toast.success("Product Updated successfully")
          setTimeout(() => {
              window.location.href = '/dashboard'
          }, 800);
          getProductData();
          setLoading(false)

      } catch (error) {
          console.log(error)
          setLoading(false)
      }
  }

    // delete product

    const deletProduct = async (item)=>{
      try {
        setLoading(true);
        await deleteDoc(doc(fireDB,'products',item.id));
        toast.success("Product deleted successfully");
        getProductData();
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    // get order data
    
    const [order,setOrder] = useState([])
    const getOrderData = async () =>{
      try {
        const q = query(
          collection(fireDB, "orders")
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
          let productsArray = [];
          QuerySnapshot.forEach((doc) => {
            productsArray.push({ ...doc.data(), id: doc.id });
          });
          setOrder(productsArray)
          setLoading(false);
        });
        return () => data;
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    useEffect(()=>{
      getOrderData();
    },[])

    // get users
    const [userss,setUsers] = useState([]);
    const getUsersData = async () =>{
      try {
        const q = query(collection(fireDB,'users'))
        const data = onSnapshot(q,(qs)=>{
          let userArr = [];
          qs.forEach( user => {
            userArr.push({...user.data(),id: qs.id})
          })
          setUsers(userArr)
        });
        return () => data
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(()=>{
      getUsersData();
    },[])

    // filter section

  const [searchkey, setSearchkey] = useState('')
  const [filterType, setFilterType] = useState('')
  const [filterPrice, setFilterPrice] = useState('')



  return (
    <MyContext.Provider value={{searchkey,setSearchkey,setFilterPrice,setFilterType,filterPrice,filterType,order,userss ,mode,toggleMode,loading,setLoading,products,setProducts,product,addProduct,updateProduct,deletProduct,editHandle}}>
       {props.children}
    </MyContext.Provider>
  )
}

export default MyState