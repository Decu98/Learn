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
        list *start,*last;
    public:
        linkedList()
        {
            start = NULL;
            last = NULL;
        }
    void addToList(int n)
    {
        list *tmp = new list;  
        tmp -> info = n;
        tmp-> next = NULL;
        
        if(start == NULL)
        {
            start = tmp;
            last = tmp;
        }
        else
        {
            last -> next = tmp;
            last = last -> next;
        }
    }
};

class command
{
    public:
        void Add()
        {
            cout << "ADD";   
        }
        void Delete()
        {
            cout << "DELETE";
        }
        void List()
        {
            cout << "LIST";
        }
};

int main()
{
    linkedList a;
    a.addToList(0);
    command x;
    int input;
    cin >> input;
    switch(input)
    {
        case 1:
            x.Add();
            break;
        case 2:
            x.Delete();
            break;
        case 3:
            x.List();
            break;
        default:
            cout << "Try ADD, DELETE or LIST";
    }
    return 0;
}
