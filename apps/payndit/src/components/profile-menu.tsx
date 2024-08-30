import Link from "next/link";


const menu = [
    {
      section: 'Account',
      sub: [
        {
          name: 'Personal Details',
          id: 'acc-per-det',
        },
        {
          name: 'Location Settings',
          id: 'acc-loc-set',
        },
      ],
    },
    {
      section: 'Payment & Transaction',
      sub: [
        {
          name: 'Payment Details',
          id: 'pt-pay-det',
        },
        {
          name: 'Transaction History',
          id: 'pt-tra-his',
        },
      ],
    },
    {
      section: 'Security and Privacy',
      sub: [
        {
          name: 'Change Password',
          id: 'sep-cha-pas',
        },
        {
          name: 'Notification Settings',
          id: 'sep-not-set',
        },
      ],
    },
    {
      section: 'Help',
      sub: [
        {
          name: 'Contact Support',
          id: 'hlp-con-sup',
        },
      ],
    },
  ];

  
const ProfileMenu = ({
    activeMenu = "",
    activePathname = "",
  }: {
    activeMenu: string;
    activePathname: string;
  }) => {
    return menu.map((item) => {
      return (
        <div key={item.section}>
          <h4 className="text-xl font-bold mb-4">{item.section}</h4>
          <ul className="pl-4">
            {item?.sub?.map((sub) => {
              return (
                <li key={sub.id} className="w-full">
                  <Link
                    href={`${activePathname}?menu=${sub.id}`}
                    className={`mb-4 p-2 w-full block cursor-pointer ${
                      activeMenu === sub?.id ? 'bg-gray-500/90' : ''
                    }`}
                  >
                    {sub?.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      );
    });
  };

export default ProfileMenu