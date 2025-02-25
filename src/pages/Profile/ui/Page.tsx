import MyProfile from './MyProfile/MyProfile';
import styles from './styles.module.css';

function ProfilePage() {
  return (
    <section className={styles.section}>
      <MyProfile />
    </section>
  );
}

export default ProfilePage;
