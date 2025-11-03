import Table from "../../components/table";
import useShipments from "./useShipments";
import { columns } from "./columns";
import styles from "./shipments.module.css";

const Shipments = () => {
  const { data } = useShipments();

  return (
    <div className={styles.shipments_container}>
      <h2 className={styles.shipments_title}>Shipments</h2>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default Shipments;
