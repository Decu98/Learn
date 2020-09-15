#include <iostream>

using namespace std;

struct list
{
    int info;
    list *next;
};

class linkedList
{
private:
    list *start, *last;

public:
    linkedList()
    {
        start = NULL;
        last = NULL;
    }
    list *getstart()
    {
        return start;
    }
    void addToList(int n)
    {
        list *tmp = new list;
        tmp->info = n;
        tmp->next = NULL;

        if (start == NULL)
        {
            start = tmp;
            last = tmp;
        }
        else
        {
            last->next = tmp;
            last = last->next;
        }
    }
    void deleteFromList(int n)
    {
        list *tmp;
        tmp = start;
        for(int i = 0; i < n-2; i++)
        {
            tmp = tmp->next;
        }
        list *next = tmp->next->next;
        delete tmp->next;
        tmp->next = next;
    }

    void display()
    {
        list *tmp;
        tmp = start;
        while (tmp != NULL)
        {
            cout << tmp->info << endl;
            tmp = tmp->next;
        }
    }
};

class command
{
    linkedList myList;
    public:
        void Add()
        {
            int toAdd;
            cout << "Give int:" << endl;
            cin >> toAdd;
            cout << "ADDED\n" << toAdd << endl;
            myList.addToList(toAdd);
        }
        void Delete()
        {
            int toDel;
            cout << "Give positon:" << endl;
            cin >> toDel;
            cout << "DELETED\n";
            myList.deleteFromList(toDel);
        }
        void List()
        {
            myList.display();
        }
};
void control()
{
    command control;
    string input;
    int zero = 1;
    while(zero != 0)
    {
        cin >> input;
        if(input == "ADD")
        {
            control.Add();
        }
        else if (input == "DELETE")
        {
            control.Delete();
        }
        else if (input == "LIST")
        {
            control.List();
        }
        else if (input == "END")
        {
            zero = 0;
        }
        else
        {
            cout << "Try ADD, DELETE, LIST or END\n";
        }
    }

};

int main()
{
    control();
    return 0;
};