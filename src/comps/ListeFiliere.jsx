import React from "react";

function ListeFiliere() {
  return (
    <div class="bg-white shadow overflow-hidden rounded-lg p-3 grow  ">
      <div class="mb-4 flex items-center justify-between">
        <div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">
            Latest Transactions
          </h3>
          <span class="text-base font-normal text-gray-500">
            This is a list of latest transactions
          </span>
        </div>
        <div class="flex-shrink-0">
          <a
            href="#"
            class="text-sm font-medium text-teal-600 hover:bg-gray-100 rounded-lg p-3"
          >
            View all
          </a>
        </div>
      </div>
      <div class="flex flex-col mt-8">
        <div class="overflow-x-auto rounded-lg">
          <div class="align-middle inline-block min-w-full">
            <div class="shadow overflow-hidden sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      La Filiere
                    </th>
                    <th
                      scope="col"
                      class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        NOMBRE D'ANNE
                    </th>
                    <th
                      scope="col"
                      class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      CYCLE
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white">
                  <tr>
                    <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                      Payment from{" "}
                      <span class="font-semibold">Bonnie Green</span>
                    </td>
                    <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                      Apr 23 ,2021
                    </td>
                    <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      $2300
                    </td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                      Payment refund to{" "}
                      <span class="font-semibold">#00910</span>
                    </td>
                    <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                      Apr 23 ,2021
                    </td>
                    <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      -$670
                    </td>
                  </tr>
                  <tr>
                    <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                      Payment failed from{" "}
                      <span class="font-semibold">#087651</span>
                    </td>
                    <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                      Apr 18 ,2021
                    </td>
                    <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      $234
                    </td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                      Payment from <span class="font-semibold">Lana Byrd</span>
                    </td>
                    <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                      Apr 15 ,2021
                    </td>
                    <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      $5000
                    </td>
                  </tr>
                  <tr>
                    <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                      Payment from <span class="font-semibold">Jese Leos</span>
                    </td>
                    <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                      Apr 15 ,2021
                    </td>
                    <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      $2300
                    </td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="p-4 whitespace-nowrap truncate  overflow-hidden text-sm font-normal text-gray-900 rounded-lg rounded-left">
                      <span class="font-semibold truncate bg-slate-400 w-[20px]">Payment from THEM</span>
                    </td>
                    <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                      Apr 11 ,2021
                    </td>
                    <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      $560
                    </td>
                  </tr>
                  <tr>
                    <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                      Payment from <span class="font-semibold">Lana Lysle</span>
                    </td>
                    <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                      Apr 6 ,2021
                    </td>
                    <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      $1437
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListeFiliere;
