import PropTypes from 'prop-types';
import { useState } from 'react';
import Select from 'react-select';

const TabContent = ({ children }) => {
    return <div>{children}</div>;
};

const TabPanel = ({ children, isActive }) => {
    return isActive ? <div>{children}</div> : null;
};

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);

    const onSelectChange = (selectedObj) => {
        setSelectedOption(selectedObj);
        setActiveTab(selectedObj.index);
    }

    return (
        <>
            <div>
                <div className="sm:hidden">
                    <label htmlFor="tabs" className="sr-only">
                        Select a tab
                    </label>
                    <Select
                        defaultValue={selectedOption}
                        onChange={onSelectChange}
                        options={tabs}
                        className="border rounded-md"
                        isClearable={false}
                        placeholder="Select Profession"
                    />
                </div>
                <div className="hidden sm:block">
                    <div className="border-b border-gray-200">
                        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                            {tabs.map((tab, index) => (
                                <a
                                    key={tab.label}
                                    href={tab.href}
                                    className={
                                        `${index === activeTab
                                            ? 'border-indigo-500 text-indigo-600'
                                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}
                                    group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium`
                                    }
                                    aria-current={tab.current ? 'page' : undefined}
                                    onClick={() => setActiveTab(index)}
                                >
                                    <tab.icon
                                        className={`-ml-0.5 mr-2 h-5 w-5
                                       ${index === activeTab ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500'}`
                                        }
                                        aria-hidden="true"
                                    />
                                    <span>{tab.label}</span>
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                {tabs.map((tab, index) => (
                    <TabPanel key={index} isActive={index === activeTab}>
                        <TabContent>{tab.content}</TabContent>
                    </TabPanel>
                ))}
            </div>
        </>
    )
}

export default Tabs;

Tabs.propTypes = {
    tabs: PropTypes.array,
}

TabPanel.propTypes = {
    children: PropTypes.node,
    isActive: PropTypes.bool
}

TabContent.propTypes = {
    children: PropTypes.node,
}