import styles from "./Days.module.scss";

interface Props {}

export interface TabsValue {
    value: string;
}

const Tabs = (props: Props) => {
    const tabs: TabsValue[] = [
        {
            value: "На неделю",
        },
        {
            value: "На 10 дней",
        },
        {
            value: "На месяц",
        },
    ];

    return (
        <div className={styles.tabs}>
            <div className={styles.tabs__wrapper}>
                {
                    tabs.map((item) => (
                        <div className={styles.tab} key={item.value}>
                            {item.value}
                        </div>
                    ))
                }
            </div>
            <div className={styles.cancel}>Отменить</div>
        </div>
    );
};

export { Tabs };
