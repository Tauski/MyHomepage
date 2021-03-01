  
import React from 'react';
import { Link } from 'react-router-dom';

/*SKILLITEM Same as CardItem, small differences made in AboutMe css*/
/*now displays different coding skills*/

function SkillsItem(props) {
  return (
    <>
      <li className='skill_item'>
        <Link className='skills_item_link' to={props.path}>
          <figure className='skills_item_pic-wrap' data-category={props.label}>
            <img
              className='skills_item_img'
              alt=''
              src={props.src}
            />
          </figure>
          <div className='skills_item_info'>
            <h5 className='skills_item_text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default SkillsItem;