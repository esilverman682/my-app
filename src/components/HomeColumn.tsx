/* eslint-disable @next/next/no-img-element */
import { Homecolumn as HomecolumnType } from 'client';
import styles from 'scss/components/Posts.module.scss';
 
interface HomecolumnProps {
  Homecolumn: HomecolumnType;
  id?: string;
}  

export default function Homecolumn({ Homecolumn }: HomecolumnProps) {
  return (
     <div className={styles.post_list}>
      <img
        src={Homecolumn?.icon?.mediaItemUrl}
        alt={Homecolumn?.icon?.altText}
      />
      <h2>{Homecolumn?.columnTitle}</h2>
      <div
        className="bio"
        dangerouslySetInnerHTML={{ __html: Homecolumn?.columnTitle }}
      />
    </div>
  );
}