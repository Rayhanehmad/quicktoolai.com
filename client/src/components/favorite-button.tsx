import { useFavorites } from '@/hooks/use-favorites';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

interface FavoriteButtonProps {
  toolId: string;
  toolName?: string;
}

export function FavoriteButton({ toolId, toolName }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(toolId);

  return (
    <Button
      variant="ghost"
      size="sm"
      className="gap-2"
      onClick={() => toggleFavorite(toolId)}
      data-testid={`button-favorite-${toolId}`}
      title={favorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Star
        className={`w-4 h-4 ${
          favorite ? 'fill-yellow-500 text-yellow-500' : 'text-muted-foreground'
        }`}
      />
      {toolName && <span className="hidden sm:inline">{toolName}</span>}
    </Button>
  );
}
