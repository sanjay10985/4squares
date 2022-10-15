import React, { useEffect, useState } from 'react'
import '../styles/FeaturedPosts.css'
import {db} from '../firebase';
import { collection, onSnapshot, query, querySnapshot } from 'firebase/firestore';

function FeaturedPost() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const q = query(collection(db,('posts')));
    const unsubscribe = onSnapshot(q,(querySnapshot)=>{
      let postsArr = [];
      querySnapshot.forEach((doc) => {
        postsArr.push({...doc.data(), id: doc.id})
      });
      setPosts(postsArr);
    })
    return () => unsubscribe();
  },[])

  return (
    <div className='featuredPost'>
      <div className="main-div">
        <div className="box box-1">
              <div className="imgbox">
              hello
              {posts.map((post) =>(
                <h1>
                  {post.title}
                  {/* {post.} */}
                </h1>
              ))}
              </div>
        </div>
        <div className="box-2">
          <div className="box box-3">
              <div className="imgbox">
              <h1>hello</h1>
              </div>

          </div>
          <div className="box-4">
            <div className="box box-5">
              
              <div className="imgbox">
              </div>

            </div>
            <div className="box box-6">
              
              <div className="imgbox">
              </div>

            </div>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default FeaturedPost