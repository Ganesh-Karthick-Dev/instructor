// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
  BorderOutlined,
  BoxPlotOutlined,
  ChromeOutlined,
  DeploymentUnitOutlined,
  GatewayOutlined,
  MenuUnfoldOutlined,
  QuestionOutlined,
  SmileOutlined,
  StopOutlined
} from '@ant-design/icons';

import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineEventAvailable } from "react-icons/md";

// icons
const icons = {
  ChromeOutlined,
  MenuUnfoldOutlined,
  BoxPlotOutlined,
  StopOutlined,
  BorderOutlined,
  SmileOutlined,
  GatewayOutlined,
  QuestionOutlined,
  DeploymentUnitOutlined,
  MdOutlineDashboard,
  MdOutlineEventAvailable
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const Dashboard = {
  id: 'other',
  title: <FormattedMessage id=" " />,
  type: 'group',
  children: [
    {
      id: 'Dashboard',
      title: <FormattedMessage id="Dashboard" />,
      type: 'item',
      url: '/dashboard',
      icon: icons.MdOutlineDashboard
    },
    {
      id: 'Availability',
      title: <FormattedMessage id="Availability" />,
      type: 'item',
      url: '/availability',
      icon: icons.MdOutlineEventAvailable
    }
  ]
};

export default Dashboard;
