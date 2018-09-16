import React from 'react'
import Photo from './Photo'
import propTypes from 'prop-types'
import {Link} from 'react-router-dom'


function PhotoWall(props) {
    return  <div>
                    <Link className="addIcon" to="/AddPhoto"></Link>
                 {/* <button onClick={props.onNavi gate} className="addIcon">  </button> */}
                 <div className="photoGrid">
                     {props.posts
                        .sort(function(x,y) {
                            return y.id - x.id
                        })
                        .map((post, index) => <Photo key={index} post={post} {...props} index={index}/>)}
                 </div> 
            </div>
}

PhotoWall.propTypes = {
    posts: propTypes.array.isRequired,
}
export default PhotoWall