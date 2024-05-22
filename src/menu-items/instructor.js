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
import { FaMarker } from "react-icons/fa6";
import { GrInProgress } from "react-icons/gr";

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
  MdOutlineEventAvailable,
  FaMarker,
  GrInProgress
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
    },
    {
      id: 'Attendance',
      title: <FormattedMessage id="Students" />,
      type: 'item',
      url: '/attendance',
      icon: icons.FaMarker
    },
    {
      id: 'Walkthrough',
      title: <FormattedMessage id="Walkthrough" />,
      type: 'item',
      url: '/walkthrough',
      icon: icons.GrInProgress
    }
  ]
};

export default Dashboard;
