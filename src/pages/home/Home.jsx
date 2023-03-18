import './home.scss';

import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widget from '../../components/widget/Widget';
import TableList from '../../components/table/TableList';
import { widgetsData } from '../../utils/widgets';



function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="home_container">
        <Navbar />
        <div className="wrapper">
          <div className="widgets">
            {widgetsData.map((item, index) => (
              <Widget
                key={index}
                title={item.title}
                count={item.count}
                link={item.link}
                percentage={item.percentage}
                ArrowIcon={item.arrowIcon}
                WidgetIcon={item.widgetIcon}
                widgetIconBgColor={item.widgetIconBgColor}
                widgetIconColor={item.widgetIconColor}
              />
            ))}
          </div>

          <div className="charts">
            <Featured />
            <Chart />
          </div>

          <div className="table_container">
            <div className="title">latest transactions</div>
            <TableList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home